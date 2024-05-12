import { Component, Input } from '@angular/core';
import { authors, posts } from '../../model/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() authors: authors[] = [];
  @Input() posts: posts[] = [];

}
