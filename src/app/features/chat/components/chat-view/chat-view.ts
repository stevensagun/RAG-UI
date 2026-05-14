import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chat-view',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, TextFieldModule, MatIconModule],
  templateUrl: './chat-view.html',
  styleUrl: './chat-view.css',
})
export class ChatView {}
