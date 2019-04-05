export const Base64 = new class Base64 {
  BASE64MAP = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" 
  encode(num: number, base:number = 64): string {
    if (base > 64 || base < 1) {
      throw new Error('Invalid base number')
    }
    if (num === 0) return this.BASE64MAP[0]
  
    let res: string = ''
    while (num > 0) {
      let remainder: number = num % base
      res += (this.BASE64MAP[remainder])
      num = Math.floor(num / base)
    }
    return res
  }
  decode(str: string, base: number = 64): number {
    if (base > 64 || base < 1) {
      throw new Error('Invalid base number')
    }

    let res: number = 0
    for(let i = 0; i < str.length; i++) {
      const c: string = str[i]
      let num: number = this.BASE64MAP.indexOf(c)
      res += num * (base ** i)
    }
    return res
  }
}
  
const result = Base64.encode(Number.MAX_VALUE)
console.log(result)
console.log(Base64.decode(result))