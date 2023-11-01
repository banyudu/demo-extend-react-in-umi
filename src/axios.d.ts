import axios from 'axios'

interface AxiosMeta {
  defaultErrorMsg?: string
  defaultValue?: any
}

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
  export interface AxiosRequestConfig { meta?: AxiosMeta }
}
