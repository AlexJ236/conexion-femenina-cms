import type { Schema, Struct } from '@strapi/strapi';

export interface PaginaValor extends Struct.ComponentSchema {
  collectionName: 'components_pagina_valors';
  info: {
    description: '';
    displayName: 'Valor';
    icon: 'star';
  };
  attributes: {
    descripcion: Schema.Attribute.Text & Schema.Attribute.Required;
    icono: Schema.Attribute.String;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'pagina.valor': PaginaValor;
    }
  }
}
