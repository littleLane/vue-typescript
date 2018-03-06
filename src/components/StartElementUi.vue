<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'
import { Button } from 'element-ui'

@Component({
  components: {
    Button
  }
})
export default class FilterItem extends Vue {
  render (h, context) {
    return (
      <el-button type="primary">我是 elementUi 按钮</el-button>
    )
  }
}
</script>
