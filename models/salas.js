import mongoose, { Schema, models } from "mongoose"

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    members: {
      id_user: {type: Schema.Types.ObjectId , ref: 'User'},
    },
  },
  { timestamps: true }
)

const Salas = models.Salas || mongoose.model("Salas", userSchema)
export default Salas