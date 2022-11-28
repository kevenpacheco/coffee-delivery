export const cepMask = {
  applyMask(value: string) {
    const masked = value.replace(/\D/g, '').replace(/^(\d{5})/, '$1-')
    return masked
  }
}

export const UFMask = {
  applyMask(value: string) {
    const masked = value.replace(/\d/g, '').toUpperCase()
    return masked
  }
}