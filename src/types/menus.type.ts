export interface Menu {
  id: number
  name: string
  pid: string
  order: string
}

export type Menus = Pick<Menu, 'id' | 'pid' | 'name' | 'order'>[]
