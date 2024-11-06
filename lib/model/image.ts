import { Document, model, models, Schema } from "mongoose";


export interface IImage extends Document {
  title: string;
  tranformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: string;
  aspectRaio?: string;
  color?: string;
  prompt?: string;
  author?: string;
  createdAt: Date;
  updatedAt: Date;
}


const ImageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tranformationType: {
    type: String,
    required: true
  },
  publicId: {
    type: String,
    required: true
  },
  secureUrl: {
    type: URL,
    required: true
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  config: {
    type: Object,
  },
  transformationUrl: {
    type: URL,
  },
  aspectRaio: {
    type: String,
  },
  color: {
    type: String,
  },
  prompt: {
    type: String,
  },
  author: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
})

const Image = models?.Image || model('Image', ImageSchema)
export default Image