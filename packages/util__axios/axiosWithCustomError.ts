import { AxiosError, AxiosStatic, AxiosInstance, AxiosResponse } from 'axios'

/**
 * custom response error interceptor
 * @param axios
 * @param validate
 */
export const axiosWithCustomError = (
  axios: AxiosStatic | AxiosInstance,
  validate: (response: AxiosResponse) => boolean | AxiosError | void
) => {
  const onFulfilled = (response: AxiosResponse) => {
    const result = validate(response)
    const { config, request, status, data } = response

    if (result === false) {
      const errorText = JSON.stringify(data, null, '\t')
      throw new AxiosError(`Custom Error: \n ${errorText}`, `${status}`, config, request, response)
    }

    if (result instanceof AxiosError) throw result

    return response
  }
  axios.interceptors.response.use(onFulfilled)
}
