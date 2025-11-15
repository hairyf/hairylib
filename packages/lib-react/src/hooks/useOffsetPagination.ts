import { useMemo, useState } from 'react'
import { useWatch } from './useWatch'

export interface UseOffsetPaginationOptions {
  total?: number
  page?: number
  pageSize?: number
  onChange?: (pagination: Pagination) => void
  onPageSizeChange?: (pagination: Pagination) => void
  onPageCountChange?: (pagination: Pagination) => void
}

export interface Pagination {
  pageSizeChange: (limit: number) => void
  pageChange: (page: number) => void
  next: () => void
  prev: () => void
  page: number
  pageSize: number
  isFirstPage: boolean
  isLastPage: boolean
  pageCount: number
  total: number
}

export function useOffsetPagination(options: UseOffsetPaginationOptions): Pagination {
  const [page, setPage] = useState(options.page || 1)
  const [pageSize, setPageSize] = useState(options.pageSize || 10)

  const total = options.total || 0
  const pageCount = useMemo(() => Math.max(1, Math.ceil(total / pageSize)), [total, pageSize])
  const isFirstPage = useMemo(() => page === 1, [page])
  const isLastPage = useMemo(() => page === pageCount, [page, pageCount])

  function next() {
    setPage(page => Math.min(pageCount, page + 1))
  }
  function prev() {
    setPage(page => Math.max(1, page - 1))
  }
  function pageChange(page: number) {
    setPage(() => Math.max(1, Math.min(page, pageCount)))
  }
  function pageSizeChange(limit: number) {
    setPageSize(limit)
    pageChange(1)
  }

  const pagination: Pagination = {
    next,
    prev,
    page,
    pageSize,
    isFirstPage,
    pageSizeChange,
    pageChange,
    isLastPage,
    pageCount,
    total,
  }

  useWatch(page, () => options.onChange?.(pagination))
  useWatch(pageSize, () => options.onPageSizeChange?.(pagination))
  useWatch(pageCount, () => options.onPageCountChange?.(pagination))

  return pagination
}
