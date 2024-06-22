const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/api/instagram', async (req, res) => {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;

    try {
        const response = await axios.get(
            `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${accessToken}`
        );
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        res.status(500).json({ error: 'Failed to fetch Instagram posts' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
