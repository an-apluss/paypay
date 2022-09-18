<template>
    <q-header>
      <q-toolbar class="bg-white">
        <q-toolbar-title shrink class="header-text--purple q-mx-xl">
          Paypay.
        </q-toolbar-title>

        <div class="text-center">
            <q-tabs dense active-class="header-link--purple" align="center" inline-label shrink class="text-black">
                <q-route-tab 
                    :key="tabItem.name"
                    :to="tabItem.link"
                    :icon="tabItem.icon"
                    :name="tabItem.name"
                    :label="tabItem.label"
                    :class="{ 'q-mr-md': index < (tabItems.length -1) }"
                    v-for="(tabItem, index) of tabItems"
                    no-caps
                    class="header-link q-py-lg q-px-sm"
                />
            </q-tabs>
        </div>

      </q-toolbar>
    </q-header>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            tabItems: [
                {
                    icon: 'grid_view',
                    name: 'dashboard',
                    label: 'Dashboard',
                    link: '/'
                },
                {
                    icon: 'description',
                    name: 'invoices',
                    label: 'Invoices',
                    link: '/#'
                },
                {
                    icon: 'account_balance_wallet',
                    name: 'wallet',
                    label: 'Wallets',
                    link: '/#'
                },
                {
                    icon: 'assessment',
                    name: 'activity',
                    label: 'Activity',
                    link: '/#'
                },
                {
                    icon: 'fas fa-phone',
                    name: 'help',
                    label: 'Help',
                    link: '/#'
                }
            ]
        }
    },
}
</script>
<style>

</style>