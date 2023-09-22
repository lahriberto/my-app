import mongoose, { Schema, models } from "mongoose"

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    members: [{
      id_user: {type: Schema.Types.ObjectId , ref: 'User'},
    }],
    mensagem: [{
      id_user: {type: Schema.Types.ObjectId , ref: 'User'},
      conteudo: {type: String},
    }],
  },
  { timestamps: true }
)

const Salas = models.Salas || mongoose.model("Salas", userSchema)
export default Salas