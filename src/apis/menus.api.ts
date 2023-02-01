import { Menus, Menu } from 'types/menus.type'
import http from 'utils/http'

export const getMenus = (page: number | string, limit: number | string, signal?: AbortSignal) =>
  http.get<Menus>('menus', {
    params: {
      _page: page,
      _limit: limit
    },
    signal
  })

export const getMenu = (id: number | string) => http.get<Menu>(`menus/${id}`)

export const addMenu = (menu: Omit<Menu, 'id'>) => http.post<Menu>('/menus', menu)

export const updateMenu = (id: number | string, menu: Menu) => http.put<Menu>(`menus/${id}`, menu)

export const deleteMenu = (id: number | string) => http.delete<{}>(`menus/${id}`)
