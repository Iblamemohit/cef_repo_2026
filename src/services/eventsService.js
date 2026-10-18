import { supabase } from "../lib/supabase";
import { Events as defaultEvents } from "../data/eventCarousel";

/**
 * Normalizes a database row to match the frontend Event object schema
 */
function normalizeEvent(row, index) {
  return {
    id: row.id,
    name: row.name,
    img: row.img,
    desc: row.desc_text || "",
    month: row.month || "",
    year: row.year || "",
    type: row.type || "Event",
    date: row.date || "",
    timeline: row.timeline || "",
    status: row.status || "upcoming",
    rsvpCount: row.rsvp_count || 0,
    orderIndex: row.order_index ?? index,
    updatedAt: row.updated_at,
  };
}

/**
 * Fetch all events from Supabase, falling back to static data if error occurs
 */
export async function getEvents() {
  try {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("order_index", { ascending: true })
      .order("id", { ascending: true });

    if (error) {
      console.warn("Supabase fetch failed, falling back to local events:", error.message);
      return defaultEvents.map((e, idx) => ({ ...e, id: idx + 1, orderIndex: idx }));
    }

    if (data && data.length > 0) {
      return data.map(normalizeEvent);
    }

    return defaultEvents.map((e, idx) => ({ ...e, id: idx + 1, orderIndex: idx }));
  } catch (err) {
    console.error("Error fetching events:", err);
    return defaultEvents.map((e, idx) => ({ ...e, id: idx + 1, orderIndex: idx }));
  }
}

/**
 * Update an existing event
 */
export async function updateEvent(id, fields) {
  const payload = {
    updated_at: new Date().toISOString(),
  };

  if (fields.name !== undefined) payload.name = fields.name;
  if (fields.img !== undefined) payload.img = fields.img;
  if (fields.desc !== undefined) payload.desc_text = fields.desc;
  if (fields.month !== undefined) payload.month = fields.month;
  if (fields.year !== undefined) payload.year = fields.year;
  if (fields.type !== undefined) payload.type = fields.type;
  if (fields.date !== undefined) payload.date = fields.date;
  if (fields.timeline !== undefined) payload.timeline = fields.timeline;
  if (fields.status !== undefined) payload.status = fields.status;
  if (fields.rsvpCount !== undefined) payload.rsvp_count = Number(fields.rsvpCount);
  if (fields.orderIndex !== undefined) payload.order_index = Number(fields.orderIndex);

  const { data, error } = await supabase
    .from("events")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return normalizeEvent(data);
}

/**
 * Create a new event
 */
export async function createEvent(fields) {
  const payload = {
    name: fields.name || "Untitled Event",
    img: fields.img || "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=2070&auto=format&fit=crop",
    desc_text: fields.desc || "",
    month: fields.month || "TBD",
    year: fields.year || "2026",
    type: fields.type || "Technical",
    date: fields.date || new Date().toISOString().split("T")[0],
    timeline: fields.timeline || "TBD",
    status: fields.status || "upcoming",
    rsvp_count: Number(fields.rsvpCount) || 0,
    order_index: Number(fields.orderIndex) || 0,
  };

  const { data, error } = await supabase
    .from("events")
    .insert([payload])
    .select()
    .single();

  if (error) throw error;
  return normalizeEvent(data);
}

/**
 * Delete an event
 */
export async function deleteEvent(id) {
  const { error } = await supabase.from("events").delete().eq("id", id);
  if (error) throw error;
  return true;
}

/**
 * Upload an image to Supabase storage bucket 'event-images'
 */
export async function uploadEventImage(file) {
  if (!file) throw new Error("No file selected");
  const ext = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${ext}`;
  const filePath = `events/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("event-images")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (uploadError) throw uploadError;

  const { data: publicUrlData } = supabase.storage
    .from("event-images")
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}

/**
 * Announcements service for other dynamic updates
 */
export async function getAnnouncements() {
  try {
    const { data, error } = await supabase
      .from("announcements")
      .select("*")
      .order("order_index", { ascending: true })
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error("Error fetching announcements:", err);
    return [];
  }
}

export async function createAnnouncement(fields) {
  const { data, error } = await supabase
    .from("announcements")
    .insert([{
      title: fields.title,
      content: fields.content,
      link: fields.link || "",
      badge: fields.badge || "Announcement",
      is_active: fields.isActive ?? true,
      order_index: fields.orderIndex ?? 0,
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateAnnouncement(id, fields) {
  const { data, error } = await supabase
    .from("announcements")
    .update({
      title: fields.title,
      content: fields.content,
      link: fields.link,
      badge: fields.badge,
      is_active: fields.isActive,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteAnnouncement(id) {
  const { error } = await supabase.from("announcements").delete().eq("id", id);
  if (error) throw error;
  return true;
}
