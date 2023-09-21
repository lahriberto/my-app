import mongoose, { Schema, models } from "mongoose"

const mensagemSchema = new Schema(
  {
    mensagem: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
)

const Mensagem = models.Mensagem || mongoose.model("Mensagem", mensagemSchema)
export default Mensagem