import axios from "axios";
import { url } from "../../config";

axios.create({
  baseURL: url,
  timeout: 1000,
});
