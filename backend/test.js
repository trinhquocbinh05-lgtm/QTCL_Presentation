async function test() {
  try {
    console.log('Adding question...');
    const postRes = await fetch('http://localhost:5000/api/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test',
        email: 'test@example.com',
        content: 'Hello'
      })
    });
    const postData = await postRes.json();
    console.log('Post success:', postData);

    const id = postData._id;

    console.log(`Patching question ${id}...`);
    const patchRes = await fetch(`http://localhost:5000/api/questions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        answered: true,
        answerContent: 'This is the answer'
      })
    });
    const patchData = await patchRes.json();
    console.log('Patch success:', patchData);
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
