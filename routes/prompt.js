var express = require('express');
var router = express.Router();
const openai = require('../utils/openai'); // Import the OpenAI client

router.post('/', async function (req, res, next) {
    try {
        const { systemMessage, prompt, model, history } = req.body; // Extract the prompt from the request body
        const systemMsg = {
            role: 'system',
            content: systemMessage || 'You are a helpful assistant.',
        };
        const messages = [
            systemMsg,
            ...history.map((message) => ({
                role: message.role,
                content: message.parts.map((part) => part.text).join(' '), // Combine parts into a single string
            })),
            {
                role: 'user',
                content: prompt, // Add the current prompt as the latest message
            },
        ];
        console.log('Messages:', messages); // Log the messages for debugging
        const completion = await openai.chat.completions.create({
            model: model,
            messages: messages,
            stream: false,
        });

        res.send(completion.choices[0].message.content);
    } catch (error) {
        console.error('Error while processing OpenAI request:', error);

        // Handle OpenAI API errors
        if (error.status) {
            res.status(error.status).send({
                error: error.message || 'An error occurred with the OpenAI API.',
            });
        } else {
            res.status(500).send({
                error: 'Internal server error.',
            });
        }
    }
});

module.exports = router;
