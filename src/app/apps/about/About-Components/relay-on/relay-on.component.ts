import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      icon: 'sl-icon-target text-info-gradiant',
      field: 'Conversor de Texto',
      fieldText: 'A melhor ferramenta para converter de maiúsculo para minúsculo ou converta somente a primeira letra de cada palavra'
    },
    {
      icon: 'sl-icon-mouse text-info-gradiant',
      field: 'Conversor de Unidades de Medida',
      fieldText: 'Conversão rápida e prática, milhares de conversões possíveis e todas grátis em poucos cliques.'
    },
    {
      icon: 'sl-icon-screen-desktop text-info-gradiant',
      field: 'Praticidade Para Seus Estudos',
      fieldText: 'Não importa a área, conversões de medidas estão sempre presentes no nosso dia a dia.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
