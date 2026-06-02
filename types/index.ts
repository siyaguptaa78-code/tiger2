export interface SiteSettings {
  domain_name: string;
  logo: string;
  business_type: number; // 1: Login only, 2: Login and Register
  aws_url: string;
}

export type ModalType =
  | 'login'
  | 'register'
  | 'forgetPassword'
  | 'about'
  | 'terms'
  | 'privacy'
  | 'rules'
  | 'responsible'
  | null;
