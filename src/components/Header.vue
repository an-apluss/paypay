<template>
    <div>
        <q-header>
            <q-toolbar class="bg-white">
                <q-toolbar-title :shrink="$q.screen.gt.sm" class="header-text--purple q-mx-xl">
                    Paypay.
                </q-toolbar-title>

                <div class="gt-sm">
                    <q-tabs dense active-class="header-link--purple" align="center" inline-label shrink class="text-dark--black">
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

                <div class="lt-md">
                    <div class="q-pt-lg"></div>
                    <q-btn
                        flat
                        icon="menu"
                        aria-label="Menu"
                        @click="leftDrawerOpen = !leftDrawerOpen"
                        class="bg-purple"
                    />
                    <div class="q-pb-lg"></div>
                </div>
            
            </q-toolbar>
        </q-header>
        <div v-if="$q.screen.lt.md">
            <q-drawer
                v-model="leftDrawerOpen"
                show-if-above
                bordered
                content-class="bg-grey-1"
            >
                <q-list class="text-dark--black">
                    <q-item-label
                        header
                        class="text-grey-8"
                    >
                        Navigation
                    </q-item-label>
                    <app-side-bar
                        v-for="link in tabItems"
                        :key="link.name"
                        v-bind="link"
                    />
                </q-list>
            </q-drawer>
        </div>
    </div>
</template>
<script>
import AppSideBar from './SideBar'
export default {
    name: "Header",
    components: {
        AppSideBar
    },
    data() {
        return {
            leftDrawerOpen: false,
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
                    link: '/invoice'
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