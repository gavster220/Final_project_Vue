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
                            <th>Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{initialNumbers}}</td>
                            <td>{{initialNumbers}}</td>
                            <td>{{initialNumbers}}</td>
                        </tr>
                    </tbody>
                </MDBTable>
            </div>
            <button @click="this.$router.push({ name: 'MonsterListView', params: {data: initialNumbers }})">Next</button>
        </div>
    </MDBContainer>
</template>

<script>
import { MDBContainer } from 'mdb-vue-ui-kit'

export default {
    name: 'HelloWorld',
    data() {
        return {
            initialNumbers: 15
        }
    },
    components: {
        MDBContainer,
    },
    props: {
        msg: String,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
