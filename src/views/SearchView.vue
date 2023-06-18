<script>
export default {
  data() {
    return {
      formId: 0,
      formName: "",
      startTime: "",
      endTime: "",
      forms: [],
    };
  },
  methods: {
    getAllForm() {
      fetch("http://localhost:8080/getAllForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.forms = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showFormDetail(form) {
      this.$router.push({ name: "form-detail", params: { form } });
    },
  },
  mounted() {
    this.getAllForm();
    const form = this.$route.params.form;
    console.log(form);
  },
  computed: {
    forms() {
      let filteredForms = this.forms;

      if (this.formName !== "") {
        filteredForms = filteredForms.filter((form) =>
          form.formName.includes(this.formName)
        );
      }

      if (this.startTime !== "") {
        filteredForms = filteredForms.filter(
          (form) => form.startTime >= this.startTime
        );
      }
      if (this.endTime !== "") {
        filteredForms = filteredForms.filter(
          (form) => form.endTime <= this.endTime
        );
      }

      return filteredForms;
    },
  },
};
</script>
<template>
  <div class="top-area">
    <div class="controller-area">
      <div class="form-area">
        <label for="">問卷查詢</label>
        <input type="text" name="" id="" v-model="formName" />
        <button class="btn btn-warning">搜尋</button>
      </div>
      <div class="date-area">
        <label for="">開始結束</label>
        <input v-model="startTime" type="date" name="" id="" /> ~
        <input v-model="endTime" type="date" name="" id="" />
      </div>
    </div>

    <div class="info-area">
      <div class="nakabtn">
        <i class="fa-solid fa-trash-can" style="color: #d18e1a"></i>
        <i class="fa-solid fa-plus" style="color: #1ad1bb"></i>
      </div>
      <table>
        <tr>
          <th>&emsp;</th>
          <th>編號</th>
          <th>問卷名稱</th>
          <th>狀態</th>
          <th>開始時間</th>
          <th>結束時間</th>
          <th>觀看統計</th>
        </tr>
        <tr v-for="form in forms" :key="form.formId">
          <td><input type="checkbox" /></td>
          <td>{{ form.formId }}</td>
          <td>
            <a @click="showFormDetail(form)">{{ form.formName }}</a>
          </td>
          <td>{{ form.status }}</td>
          <td>{{ form.startTime }}</td>
          <td>{{ form.endTime }}</td>
          <td><button>觀看統計</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top-area {
  height: 100vh;

  top: 8rem;
  left: 34rem;

  .controller-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form-area {
      margin-bottom: 0.5rem;
      .btn {
        margin-left: 2rem;
      }
    }
  }

  .nakabtn {
    margin-top: 0.5rem;
    .fa-solid {
      font-size: 25px;
      margin-right: 0.5rem;
    }
  }
  .info-area {
    width: 100%;
    top: 6rem;
    left: 0rem;
    margin-top: 1rem;
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th,
    td {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    th {
      background-color: #777;
    }
    border: 2px solid black;
  }

  nav {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  nav {
    position: absolute;
    bottom: 1rem;
    top: 15rem;
    left: 1rem;
    right: 3rem;
  }
}
</style>
