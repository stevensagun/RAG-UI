import { Component } from '@angular/core';
import { ChatSidebar } from './components/chat-sidebar/chat-sidebar';
import { ChatView } from './components/chat-view/chat-view';

@Component({
  selector: 'app-chat',
  imports: [ChatSidebar, ChatView],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {}
