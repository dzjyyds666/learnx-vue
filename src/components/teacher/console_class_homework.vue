<template>
  <div class="class_homework">
    <div class="class_homework_header">
      <el-button class="el-button_style">发布作业</el-button>
      <el-button class="el-button_style">批阅作业</el-button>
    </div>
    <el-card class="class_homework_card">
      <template #header>
        <div class="card_header">
          <span>第一次作业</span>
        </div>
      </template>
      <el-text class="card_content" line-clamp="3">
        央视网消息（新闻联播）：首届全民阅读大会23日在京开幕。中共中央总书记、国家主席、中央军委主席习近平发来贺信，表示热烈的祝贺。
        习近平在贺信中指出，阅读是人类获取知识、启智增慧、培养道德的重要途径，可以让人得到思想启发，树立崇高理想，涵养浩然之气。中华民族自古提倡阅读，讲究格物致知、诚意正心，传承中华民族生生不息的精神，塑造中国人民自信自强的品格。
        习近平希望广大党员、干部带头读书学习，修身养志，增长才干；希望孩子们养成阅读习惯，快乐阅读，健康成长；希望全社会都参与到阅读中来，形成爱读书、读好书、善读书的浓厚氛围。
        开幕式上，中共中央政治局委员、中宣部部长黄坤明宣读了习近平的贺信并讲话。他说，习近平总书记的贺信，充分体现了党中央对推动全民阅读、建设书香中国的高度重视。要认真学习贯彻习近平总书记重要指示精神，加强阅读引领，涵育阅读风尚，构建覆盖城乡的阅读推广服务体系，推动全民阅读扩大覆盖、提升品质、增强实效，以书香中国建设促进文化强国建设，为奋进新征程、建功新时代注入强大精神力量。
        首届全民阅读大会由中央宣传部（国家新闻出版署）、北京市委、北京市政府指导，中宣部出版局、北京市委宣传部主办，主题为“阅读新时代、奋进新征程”，包括系列论坛、展览展示、发布和主题活动等环节。有关部门负责同志、出版发行单位和社会组织代表、专家学者和作家读者代表等参加大会。
      </el-text>
      <template #footer>
        <div class="card_footer">
          <el-button type="danger">删除</el-button>
          <el-button type="primary">修改</el-button>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.class_homework {
  padding: 20px;
  .class_homework_header {
    display: flex;
    justify-content: end;
    .el-button_style {
      background-color: var(--primary-color);
      color: var(--light-text);
    }
  }

  .class_homework_card {
    margin-top: 10px;

    .class_homework_card:last-child {
      margin-bottom: 10px;
    }

    .card_content {
      font-size: 0.8rem;
      color: var(--gray-text);
    }

    .card_footer {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
