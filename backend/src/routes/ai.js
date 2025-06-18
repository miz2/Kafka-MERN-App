// routes/aiRoutes.js
const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

// ✅ Use your API key from env
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 🎯 POST /generate-rule
router.post('/generate-rule', async (req, res) => {
  const { prompt } = req.body;

  try {
    const aiRes = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are an assistant that helps users create automation rules for scheduled emails. Return a valid JSON object with keys: name, trigger (SCHEDULE), schedule (cron string), action (SEND_EMAIL), and payload (email, subject, body).',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const rawText = aiRes.choices[0].message.content;

    let rule;
    try {
      rule = JSON.parse(rawText);
    } catch (parseErr) {
      return res.status(400).json({ error: 'Invalid JSON response from AI', raw: rawText });
    }

    res.status(200).json({ rule });
  } catch (err) {
    console.error('🔴 OpenAI Error:', err?.response?.data || err.message);
    res.status(500).json({ error: 'Failed to generate rule' });
  }
});

module.exports = router;
