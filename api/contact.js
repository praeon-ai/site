export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  try {
    const body = req.body || {};
    const required = ['name', 'email', 'org', 'useCase', 'message'];
    const missing = required.filter((field) => !body[field]);
    if (missing.length > 0) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: `Missing required fields: ${missing.join(', ')}` }));
      return;
    }

    const submission = {
      receivedAt: new Date().toISOString(),
      ...body,
    };

    console.log('Praeon contact submission', submission);

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "We’ll propose a 2-week audit drill with success criteria." }));
  } catch (error) {
    console.error('Praeon contact submission failed', error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
}
