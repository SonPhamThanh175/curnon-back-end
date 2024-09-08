import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import mongoose from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop()
  name: string;

  @Prop({ default: [''] })
  images: string[];

  @Prop()
  description: string;

  @Prop()
  descriptionFull: string;

  @Prop()
  originalPrice: number;

  @Prop()
  salePrice: number;

  @Prop()
  dialSize: number;

  @Prop()
  thickness: number;

  @Prop()
  dialColor: string;

  @Prop()
  movementType: string;

  @Prop()
  strapSize: number;

  @Prop()
  waterResistance: string;

  @Prop()
  glassMaterial: string;

  @Prop()
  strapMaterial: string;

  @Prop({ type: Types.ObjectId })
  typeId: Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
