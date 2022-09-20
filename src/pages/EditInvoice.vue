<template>
  <q-page class="q-mx-md">
    <q-breadcrumbs class="q-ma-xl">
      <q-breadcrumbs-el class="text-purple text-bold" label="Invoices" to="/invoice" />
      <q-breadcrumbs-el class="text-light--black" :label="`edit invoice (${invoiceNumber})`" />
    </q-breadcrumbs>

    <div class="col bg-white q-pa-xl q-mx-xl q-mb-xl border-radius-round-15">
      <template v-if="invoiceDetails === null">
        <div class="row q-ma-xl">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <p class="text-h6 text-center text-light--black">Loading...</p>
          </div>
        </div>
      </template>
      <template v-else-if="Object.keys(invoiceDetails).length == 0">
        <div class="row q-ma-xl">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <p class="text-h6 text-center text-light--black">No such invoice</p> 
          </div>
        </div>
      </template>
      <template v-else>
          <div class="row q-mx-xl q-mb-xl">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div class="row">
              <div class="col-xs-4 col-sm-3 col-md-2">
                <img width="60px" :src="`${invoiceDetails && invoiceDetails.company_logo_url}`" alt="dipa" />
              </div>
              <div class="col-xs-8 col-sm-9 col-md-10">
                <p class="text-h5 q-mb-sm text-bold">{{invoiceDetails && invoiceDetails.company_name}}</p>
                <p class="text-light--black">{{invoiceDetails && invoiceDetails.company_email}}</p>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 text-right">
            <p class="text-light--black q-mb-sm">
              {{invoiceDetails && invoiceDetails.company_address}}
            </p>
            <p class="text-light--black q-mb-sm">
              <span>{{invoiceDetails && invoiceDetails.company_city}}, </span>
              <span>{{invoiceDetails && invoiceDetails.company_postal_code}}</span>
            </p>
            <p class="text-light--black q-mb-sm">
              <span>{{invoiceDetails && invoiceDetails.company_state}}, </span>
              <span>{{invoiceDetails && invoiceDetails.company_country}}</span>
            </p>
          </div>
        </div>

        <div class="row q-mx-xl q-pa-xl banner-purple-gradient border-radius-round-25">
          <div class="col-xs-12 col-sm-12 col-md-6 text-white">
            <p class="text-bold q-mb-sm">
              Invoice Number
            </p>
            <p class="text-bold q-mb-sm">
              {{invoiceDetails && invoiceDetails.invoice_id}}
            </p>
            <p class="q-mb-sm">
              <span class="q-mr-sm text-faded-0-5">Issued Date:</span>
              <span class="text-bold">{{invoiceDetails && invoiceDetails.issued_date}}</span>
            </p>
            <p class="q-mb-sm">
              <span class="q-mr-sm text-faded-0-5">Due Date:</span>
              <span class="text-bold">{{invoiceDetails && invoiceDetails.due_date}}</span>
            </p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 text-white text-right">
            <p class="text-bold q-mb-sm">
              Billed to
            </p>
            <p class="q-mb-sm">
              {{invoiceDetails && invoiceDetails.billed_to_name}}
            </p>
            <p class="q-mb-sm">
              {{invoiceDetails && invoiceDetails.billed_to_company}}
            </p>
            <p class="q-mb-sm">
              <span>{{invoiceDetails && invoiceDetails.billed_to_state}}, </span>
              <span>{{invoiceDetails && invoiceDetails.billed_to_country}}</span>
            </p>
          </div>
        </div>

        <div class="row q-mx-xl q-mt-xl">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <p class="text-dark--black text-bold q-mb-none">Item Detail</p>
            <p class="text-light--black">Type item for <span class="text-bold">Hours</span> item</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 text-right">
            <q-btn class="text-purple text-bold" style="background:#f2f5fc" rounded  icon="tune" label="Customize" no-caps unelevated />
          </div>
        </div>

        <hr class="divider q-mx-xl q-mt-md" />

        <div class="row q-mx-xl">
          <div class="col-xs-12 col-sm-12 col-md-5">
            <p class="text-light--black q-mb-lg">Item name</p>
            <q-input 
              input-class="text-bold"  
              style="width:90%" 
              outlined 
              v-model="invoiceDetails.product_name"
              placeholder="Product name" 
              dense 
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-md-7">
            <div class="row">
              <div class="col-xs-12 col-sm-5 col-md-5">
                
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-5">
                    <p class="text-light--black q-mb-lg">Hour</p>
                    <q-input 
                      style="width:80%" 
                      outlined 
                      v-model="invoiceDetails.hours" 
                      dense
                      mask="###"
                    />
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-7">
                    <p class="text-light--black q-mb-lg">Rate/Hour</p>
                    <q-input 
                      style="width:80%" 
                      outlined 
                      v-model="invoiceDetails.rate" 
                      dense
                    >
                      <template v-slot:prepend>
                        <span class="fs-14-px">$</span>
                      </template>
                    </q-input>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-5">
                    <p class="text-light--black q-mb-lg">Tax</p>
                    <q-input 
                      style="width:80%" 
                      outlined 
                      v-model="invoiceDetails.tax" 
                      dense
                    >
                      <template v-slot:prepend>
                        <span class="fs-14-px">$</span>
                      </template>
                    </q-input>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-7">
                    <p class="text-light--black q-mb-lg">Line Total</p>
                    <q-input 
                      style="width:80%" 
                      outlined 
                      v-model="invoiceDetails.line_total" 
                      dense
                    >
                      <template v-slot:prepend>
                        <span class="fs-14-px">$</span>
                      </template>
                    </q-input>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 col-sm-2 col-md-1">
                <p class="q-mb-lg" style="color:transparent">Plus</p>
                <q-btn round color="primary" icon="add" size="sm" class="bg-purple" />
              </div>
            </div>
          </div>
        </div>

        <div class="row q-mx-xl q-mt-md">
          <div class="col-xs-12 col-sm-12 col-md-5">
            <q-input 
              input-class="text-bold"  
              style="width:90%" 
              outlined 
              v-model="invoiceDetails.description" 
              dense
              placeholder="Description"
            />
          </div>
        </div>

        <hr class="divider q-mx-xl q-mt-md" />

        <div class="row q-mx-xl q-mt-lg">
          <div class="col-xs-12 col-sm-12 col-md-8">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6">
                <p class="text-dark--black text-bold q-mb-xl">Payment Method</p>
                <p class="text-dark--black text-bold q-ml-lg">{{invoiceDetails && invoiceDetails.payment_method}}</p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6">
                <p class="text-dark--black text-bold q-mb-xl">Select payment</p>
                <img :src="invoiceDetails && invoiceDetails.selected_payment_logo_url" alt="logo">
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <p class="q-ml-lg">
                  <span class="text-light--black">Account Name: </span>
                  <span class="text-dark--black text-bold">{{invoiceDetails && invoiceDetails.account_name}}</span>
                </p>
                <p class="q-ml-lg">
                  <span class="text-light--black">Account Number: </span>
                  <span class="text-dark--black text-bold">{{invoiceDetails && invoiceDetails.account_number}}</span>
                </p>
                <p class="q-ml-lg">
                  <span class="text-light--black">Routing Number: </span>
                  <span class="text-dark--black text-bold">{{invoiceDetails && invoiceDetails.routing_number}}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6">
                <p class="text-dark--black text-bold">Sub Total</p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6">
                <p class="text-dark--black text-bold text-right">${{subTotal | formatToCurrency}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6">
                <p class="text-light--black">Discount</p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6">
                <p class="text-dark--black text-bold text-right">${{invoiceDetails && invoiceDetails.discount | formatToCurrency}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6">
                <p class="text-light--black">Total tax</p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6">
                <p class="text-dark--black text-bold text-right">${{invoiceDetails && invoiceDetails.total_tax | formatToCurrency}}</p>
              </div>
            </div>
            <hr class="divider q-mt-xl q-mb-lg" />
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6">
                <p class="text-light--black">Total Amount</p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6">
                <p class="text-dark--black text-bold text-right">${{totalAmount | formatToCurrency}}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageEditInvoice',
  data() {
    return {
      invoiceNumber: 'INV-2022-010', // this is in place of the url param
      money_mask: {
        decimal: ".",
        thousands: ",",
        prefix: "",
        suffix: "",
        precision: 2,
        masked: false,
      },
      invoiceDetails: null,
    }
  },

  filters: {
    formatToCurrency(amount){
      return amount && parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
    }
  },

  computed: {
    subTotal() {
      return this.invoiceDetails && (parseFloat(this.invoiceDetails.rate) * parseFloat(this.invoiceDetails.hours)).toFixed(2)
    },

    totalAmount() {
      return this.invoiceDetails && (parseFloat(this.subTotal) + parseFloat(this.invoiceDetails.discount) + parseFloat(this.invoiceDetails.total_tax)).toFixed(2)
    },
  },

  mounted() {
    this.fetchAnInvoice();
  },

  methods: {
    fetchAnInvoice() {
      this.$store.dispatch('invoices/fetchOneInvoiceByID', this.invoiceNumber)
        .then(res => {
          this.invoiceDetails = res;
        })
        .catch(error => {})
    }
  },
}
</script>
