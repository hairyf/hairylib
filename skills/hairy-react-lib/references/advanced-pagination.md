---
name: advanced-pagination
description: Offset-based pagination hook
---

# Pagination

## Usage

### Basic Pagination

```typescript
import { useOffsetPagination } from '@hairy/react-lib'

function DataTable() {
  const pagination = useOffsetPagination({
    total: 100,
    page: 1,
    pageSize: 10,
    onChange: (p) => {
      console.log('Page changed:', p.page)
    }
  })

  return (
    <div>
      <div>
        Page {pagination.page} of {pagination.pageCount}
      </div>
      <button onClick={pagination.prev} disabled={pagination.isFirstPage}>
        Previous
      </button>
      <button onClick={pagination.next} disabled={pagination.isLastPage}>
        Next
      </button>
      <select
        value={pagination.pageSize}
        onChange={(e) => pagination.pageSizeChange(Number(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  )
}
```

### With Callbacks

```typescript
import { useOffsetPagination } from '@hairy/react-lib'

function MyComponent() {
  const pagination = useOffsetPagination({
    total: items.length,
    pageSize: 20,
    onChange: (p) => {
      fetchData(p.page, p.pageSize)
    },
    onPageSizeChange: (p) => {
      console.log('Page size changed to:', p.pageSize)
    },
    onPageCountChange: (p) => {
      console.log('Total pages:', p.pageCount)
    }
  })

  return (
    <div>
      {/* Pagination UI */}
    </div>
  )
}
```

## Key Points

* **Offset-based**: Uses page number and page size (offset = (page - 1) * pageSize).
* **Automatic calculations**: Computes `pageCount`, `isFirstPage`, `isLastPage` automatically.
* **Boundary handling**: `pageChange()` and navigation methods respect page boundaries.
* **Page size change**: Automatically resets to page 1 when page size changes.
* **Callbacks**: `onChange`, `onPageSizeChange`, `onPageCountChange` fire on respective changes.
* **Return value**: Returns pagination object with state and control methods.
* **Use cases**: Data tables, lists, search results, any paginated content.
