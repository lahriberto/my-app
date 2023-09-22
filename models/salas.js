import mongoose, { Schema, models } from "mongoose"

const userSchema = new Schema(
  {
    name: { type: String, required: true, },
    members: [{
      id_user: { type: Schema.Types.ObjectId, ref: 'User' },
    }],
    mensagem: [{type: new mongoose.Schema(
      {
        type: Schema.Types.ObjectId, 
        conteudo: { type: String }, 
      },
      { timestamps: true }
      )
    }],
    pendentes: [{
      type: new mongoose.Schema(
        {
          pedidoEm: { type: Date, required: true, },
          id_user: { type: Schema.Types.ObjectId, ref: 'User' },
          votosFavor: [{
            type: new mongoose.Schema(
              {
                type: Schema.Types.ObjectId
              }, 
              { timestamps: true }
              )
          }],
          votosContra: [{
            type: new mongoose.Schema(
              {
                type: Schema.Types.ObjectId
              }, 
              { timestamps: true }
              )
          }],
        },
        { timestamps: true }
      )
    }],
  },
  { timestamps: true }
)

const Salas = models.Salas || mongoose.model("Salas", userSchema)
export default Salas