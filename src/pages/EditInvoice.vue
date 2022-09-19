<template>
  <q-page class="q-mx-md">
    <q-breadcrumbs class="q-ma-xl">
      <q-breadcrumbs-el class="text-purple text-bold" label="Invoices" to="/invoice" />
      <q-breadcrumbs-el class="text-light--black" :label="`edit invoice (${invoiceNumber})`" />
    </q-breadcrumbs>

    <div class="col bg-white q-pa-xl q-mx-xl q-mb-xl border-radius-round-15">
      <div class="row q-mx-xl q-mb-xl">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <div class="row">
            <div class="col-xs-4 col-sm-3 col-md-2">
              <img width="60px" src="https://res.cloudinary.com/an-apluss/image/upload/v1663532162/ourpass/dipa_inhouse_logo.png" key="dipa inhouse" />
            </div>
            <div class="col-xs-8 col-sm-9 col-md-10">
              <p class="text-h5 q-mb-sm text-bold">Dipa Inhouse</p>
              <p class="text-light--black">hello@dipainhouse.com</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 text-right">
          <p class="text-light--black q-mb-sm">
            Ijen Boulevard Street 101
          </p>
          <p class="text-light--black q-mb-sm">
            <span>Malang City, </span>
            <span>65116</span>
          </p>
          <p class="text-light--black q-mb-sm">
            <span>East Java, </span>
            <span>Indonesia</span>
          </p>
        </div>
      </div>

      <div class="row q-mx-xl q-pa-xl banner-purple-gradient border-radius-round-25">
        <div class="col-xs-12 col-sm-12 col-md-6 text-white">
          <p class="text-bold q-mb-sm">
            Invoice Number
          </p>
          <p class="text-bold q-mb-sm">
            INV_2022_010
          </p>
          <p class="q-mb-sm">
            <span class="q-mr-sm text-faded-0-5">Issued Date:</span>
            <span class="text-bold">11 Jan 22</span>
          </p>
          <p class="q-mb-sm">
            <span class="q-mr-sm text-faded-0-5">Due Date:</span>
            <span class="text-bold">18 Jan 22</span>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 text-white text-right">
          <p class="text-bold q-mb-sm">
            Billed to
          </p>
          <p class="q-mb-sm">
            Zaky Grizzly
          </p>
          <p class="q-mb-sm">
            Monlight Agency LTD
          </p>
          <p class="q-mb-sm">
            <span>New York, </span>
            <span>USA</span>
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
                    v-money="money_mask"
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
                    v-money="money_mask"
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
                    v-money="money_mask"
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
              <p class="text-dark--black text-bold q-ml-lg">Wire Transfer</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <p class="text-dark--black text-bold q-mb-xl">Select payment</p>
              <img src="https://res.cloudinary.com/an-apluss/image/upload/v1663532291/ourpass/wise_logo.svg" alt="logo">
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <p class="q-ml-lg">
                <span class="text-light--black">Account Name: </span>
                <span class="text-dark--black text-bold">Barly Vallendito</span>
              </p>
              <p class="q-ml-lg">
                <span class="text-light--black">Account Number: </span>
                <span class="text-dark--black text-bold">9700 0023 4200 2900</span>
              </p>
              <p class="q-ml-lg">
                <span class="text-light--black">Routing Number: </span>
                <span class="text-dark--black text-bold">084009519</span>
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
              <p class="text-dark--black text-bold text-right">$4,800.00</p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <p class="text-light--black">Discount</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <p class="text-dark--black text-bold text-right">$0.00</p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <p class="text-light--black">Total tax</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <p class="text-dark--black text-bold text-right">$0.00</p>
            </div>
          </div>
          <hr class="divider q-mt-xl q-mb-lg" />
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <p class="text-light--black">Total Amount</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <p class="text-dark--black text-bold text-right">$0.00</p>
            </div>
          </div>
        </div>
      </div>
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
      invoiceDetails: {
        product_name: '',
        company_logo_url: '',
        company_name: '',
        company_address: '',
        company_state: '',
        company_city: '',
        company_email: '',
        company_country: '',
        invoiceNumber: '',
        billed_to_name: '',
        billed_to_state: '',
        billed_to_city: '',
        billed_to_country: '',
        issued_date: '',
        due_date: '',
        hours: '',
        rate: '',
        tax: '',
        line_total: '',
        description: '',
        payment_method: '',
        selected_payment_logo_url: '',
        account_number: '',
        account_name: '',
        routing_number: '',
        discount: '',
        total_tax: '',
      },
    }
  },
}
</script>
