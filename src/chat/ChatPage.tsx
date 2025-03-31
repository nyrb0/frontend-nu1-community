import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4200');

function App() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<any[]>([]);
    const [username, setUsername] = useState('');

    // useEffect(() => {
    //     socket.on('message', data => {
    //         setMessages(prev => [...prev, data]);
    //     });

    //     return () => {
    //         socket.off('message');
    //     };
    // }, []);

    // const sendMessage = () => {
    //     if (message.trim() && username.trim()) {
    //         socket.emit('message', { username, message });
    //         setMessage('');
    //     }
    // };

    return <div style={{ padding: 20 }}></div>;
}

export default App;
