import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';
//import { Card, CardContent, Button } from 'shadcn-ui';

export default function CodeSnippet() {
  const code = `
  fetch('https://free-unoficial-gpt4o-mini-api-g70n.onrender.com/chat/?query=test1', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  `;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
  };

  return (
    <Card>
      <CardContent>
        <pre>{code}</pre>
        <Button onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</Button>
      </CardContent>
    </Card>
  );
}
