import {Condominio} from "./condominio";
export interface CondominioPage {
  condominios: Condominio[];
  totalElements: number;
  totalPages: number;
}
