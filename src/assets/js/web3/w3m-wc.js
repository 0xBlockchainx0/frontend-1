class W3mWc extends HTMLElement {
    constructor() {
      super();
  
    }
  
    connectedCallback() {
  
      this.render();
    }

    render() {
      this.innerHTML = `
        
    <div class="container"> <!-- style="background-color: #151a30; margin-top: 270px;" -->
    <div class="row">
      <div class="col-md-12">

        <div id="prepare">
          <button class="btn btn-primary" id="btn-connect" style="margin-top: 20px">
            Connect1 wallet
          </button>
        </div>

        <div id="connected" style="display: none; background-color: #151a30; margin-top: 270px;padding: 10px;border: 2px solid white;">

          <button class="btn btn-primary" id="btn-disconnect" style="float: right; margin: 15px;">
            Disconnect wallet
          </button>
          <button class="btn btn-primary" id="btn-reduce" style="float: right; margin: 15px;">
            Close
          </button>

          <hr>

          <div id="network">
            <p>
              <strong>Connected blockchain:</strong> <span id="network-name"></span>
            </p>

            <p>
              <strong>Selected account:</strong> <span id="selected-account"></span>
            </p>

          </div>

          <hr>

          <!-- <h3>All account balances</h3> -->

          <table class="table table-listing" style="color: white">
            <thead>
              <th>Address</th>
              <th>balance</th>
            </thead>

            <tbody id="accounts">
            </tbody>
          </table>


        </div>

        <br>


      </div>
    </div>
  </div>

  <!-- We use simple <template> templating for the example -->
  <div id="templates" style="display: none">
    <template id="template-balance">
      <tr><th class="address"></th></tr>
      <tr>
        <tr>Chain token Balance:</tr>
        <td class="balance"></td>
      </tr>
      <tr>
        <tr>DXW Balance<tr>
        <td class="dxwBalance"></td>
      </tr>
    </template>
  </div>
  
        `;
    }
  }

  customElements.define("w3m-wc", W3mWc);