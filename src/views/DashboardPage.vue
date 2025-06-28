<template>
    <div>
        <h1>📚 ระบบยืมคืนหนังสือ</h1>
        <book-list></book-list> 
    </div>
</template>

<script>

import BookList from '../components/BookList.vue'

export default {
    components: {
        BookList
    }
}
</script>