import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.scss']
})
export class MessagelistComponent {
  messages: any = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.addMessage().subscribe((newMessage) => {
      if (newMessage) {
        this.messages.push(newMessage);
      } else {
        this.messages = [];
      }
    });
  }
}


