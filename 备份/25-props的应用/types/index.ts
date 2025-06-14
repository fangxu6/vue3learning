// 定义一个接口，用于限制person对应的具体属性
export interface PersonInterface {
  id: string
  age: number
  name: string
}

// 自定义类型
export type Persons = Array<PersonInterface>
