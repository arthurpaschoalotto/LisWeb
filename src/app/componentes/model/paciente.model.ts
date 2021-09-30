export class Paciente {
  public id?: number;
  public nome?: string;
  public data_nascimento?: Date;
  public rg?: number;
  public cpf?: number;
  public sexo?: string;
  public cor?: string;
  public nome_mae?: string;
  public nome_pai?: string;
  public idade_paciente?: string;

  public cep?: number;
  public localidade?: string;
  public uf?: string;
  public ibge?: number;
  public logradouro?: string;
  public complemento?: string;
  public bairro?: string;
  public numero?: number;

  public convenio?: string;
  public titular_conv?: string;
  public carteirinha_conv?: string;
  public validade_conv?: Date;
  public cns_conv?: string;

  public receber_infadc?: boolean;
  public receber_email?: boolean;
  public receber_sms?: boolean;
  public observacao?: string;
  public telefone?: string;
  public email?: string;
  public celular?: string;

  constructor(values: Paciente) {
    Object.assign(this, values);
  }
}
