<template>
    <MDBContainer>
        <div
            class="d-flex justify-content-center align-items-center"
            style="height: 100vh"
        >
            <div class="text-center">
                <MDBTable
                    class="table dark table-bordered table-striped table-info table-font"
                >
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>Health</th>
                            <th>{{msg}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>80</td>
                            <td>80</td>
                            <td>80</td>
                        </tr>
                    </tbody>
                </MDBTable>
            </div>
        </div>
    </MDBContainer>
</template>

<script>
import { MDBContainer } from 'mdb-vue-ui-kit'

export default {
    name: 'MonsterList',
    components: {
        MDBContainer,
    },
    props: {
        msg: String,
    },
    methods: {

    },
    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
