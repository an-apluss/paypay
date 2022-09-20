<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    exact
    active-class="header-link--purple"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-bold">{{ label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>

export default {
  name: 'EssentialLink',
  props: {
    name: {
      type: String,
      required: true
    },

    label: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
