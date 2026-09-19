
export default async function handler(req, res) {
  try {
    const { num } = req.query;

    if (!num) {
      return res.status(400).json({
        success: false,
        message: "num parameter missing"
      });
    }

    const apiUrl = `https://ohidul-free-api.vercel.app/api/number?num=${encodeURIComponent(num)}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return res.status(502).json({
        success: false,
        message: "Upstream API error",
        status: response.status
      });
    }

    const data = await response.json();

    return res.status(200).json({
      ...data,
      by: "@developer_ohidul",
      channel: "https://www.instagram.com/ur__ohidul__7x____/"
    });

  } catch (error) {
    console.error("API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}
