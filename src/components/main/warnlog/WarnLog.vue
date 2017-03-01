<template>
  <div>
    <div class="table-responsive">
      <table class="table table-striped table-bordered table-hover dataTables-example" >
        <thead>
        <tr>
          <th>Rendering engine</th>
          <th>Browser</th>
          <th>Platform(s)</th>
          <th>Engine version</th>
          <th>CSS grade</th>
        </tr>
        </thead>
        <tbody>
        <tr class="gradeX">
          <td>Trident</td>
          <td>Internet
            Explorer 4.0
          </td>
          <td>Win 95+</td>
          <td class="center">4</td>
          <td class="center">X</td>
        </tr>
        <tr class="gradeA">
          <td>Webkit</td>
          <td>Safari 2.0</td>
          <td>OSX.4+</td>
          <td class="center">419.3</td>
          <td class="center">A</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <th>Rendering engine</th>
          <th>Browser</th>
          <th>Platform(s)</th>
          <th>Engine version</th>
          <th>CSS grade</th>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
  import dataTables from 'datatables.net'
  import dataTablesBs from 'datatables.net-bs'
  import 'datatables.net-bs/css/dataTables.bootstrap.css'
  export default {
    mounted () {
      $('.dataTables-example').DataTable({
        dom: '<"html5buttons"B>lTfgitp',
        buttons: [
          { extend: 'copy'},
          {extend: 'csv'},
          {extend: 'excel', title: 'ExampleFile'},
          {extend: 'pdf', title: 'ExampleFile'},

          {extend: 'print',
            customize: function (win){
              $(win.document.body).addClass('white-bg');
              $(win.document.body).css('font-size', '10px');

              $(win.document.body).find('table')
                .addClass('compact')
                .css('font-size', 'inherit');
            }
          }
        ]

      });
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  table.dataTable thead .sorting_asc:after {
    content: "\e155";
  }
  table.dataTable thead .sorting:after {
    opacity: 0.2;
    content: "\e155";
  }

  able.dataTable thead .sorting:after, table.dataTable thead .sorting_asc:after, table.dataTable thead .sorting_desc:after, table.dataTable thead .sorting_asc_disabled:after, table.dataTable thead .sorting_desc_disabled:after {
    position: absolute;
    bottom: 8px;
    right: 8px;
    display: block;
    font-family: 'Glyphicons Halflings';
    opacity: 0.5;
  }

  .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {
    background-color: #F5F5F6;
    border-bottom-width: 1px;
  }
</style>
