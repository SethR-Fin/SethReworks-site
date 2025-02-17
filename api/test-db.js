import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
    // Connect to Supabase
    const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_ANON_KEY
    );

    // Test fetching blog posts
    const { data, error } = await supabase.from("blog_posts").select("*");

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: "Connected successfully!", data });
}
