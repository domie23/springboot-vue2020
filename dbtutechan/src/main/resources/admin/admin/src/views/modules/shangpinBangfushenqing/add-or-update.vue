<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='shangpin'">
                    <el-form-item class="select" v-if="type!='info'"  label="商品" prop="shangpinId">
                        <el-select v-model="ruleForm.shangpinId" :disabled="ro.shangpinId" filterable placeholder="请选择商品" @change="shangpinChange">
                            <el-option
                                    v-for="(item,index) in shangpinOptions"
                                    v-bind:key="item.id"
                                    :label="item.shangpinName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='shangpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="商品名称" prop="shangpinName">
                        <el-input v-model="shangpinForm.shangpinName"
                                  placeholder="商品名称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="商品名称" prop="shangpinName">
                            <el-input v-model="ruleForm.shangpinName"
                                      placeholder="商品名称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='shangpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="商品编号" prop="shangpinUuidNumber">
                        <el-input v-model="shangpinForm.shangpinUuidNumber"
                                  placeholder="商品编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="商品编号" prop="shangpinUuidNumber">
                            <el-input v-model="ruleForm.shangpinUuidNumber"
                                      placeholder="商品编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='shangpin' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.shangpinPhoto" label="商品照片" prop="shangpinPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (shangpinForm.shangpinPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.shangpinPhoto" label="商品照片" prop="shangpinPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.shangpinPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='shangpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="原产地" prop="shangpinAddress">
                        <el-input v-model="shangpinForm.shangpinAddress"
                                  placeholder="原产地" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="原产地" prop="shangpinAddress">
                            <el-input v-model="ruleForm.shangpinAddress"
                                      placeholder="原产地" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='shangpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="赞" prop="zanNumber">
                        <el-input v-model="shangpinForm.zanNumber"
                                  placeholder="赞" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="赞" prop="zanNumber">
                            <el-input v-model="ruleForm.zanNumber"
                                      placeholder="赞" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='shangpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="踩" prop="caiNumber">
                        <el-input v-model="shangpinForm.caiNumber"
                                  placeholder="踩" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="踩" prop="caiNumber">
                            <el-input v-model="ruleForm.caiNumber"
                                      placeholder="踩" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='shangpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="商品类型" prop="shangpinValue">
                        <el-input v-model="shangpinForm.shangpinValue"
                                  placeholder="商品类型" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="商品类型" prop="shangpinValue">
                            <el-input v-model="ruleForm.shangpinValue"
                                      placeholder="商品类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='shangpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="二级类型" prop="shangpinErjiValue">
                        <el-input v-model="shangpinForm.shangpinErjiValue"
                                  placeholder="二级类型" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="二级类型" prop="shangpinErjiValue">
                            <el-input v-model="ruleForm.shangpinErjiValue"
                                      placeholder="二级类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='shangpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="帮扶产品" prop="bangfuValue">
                        <el-input v-model="shangpinForm.bangfuValue"
                                  placeholder="帮扶产品" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="帮扶产品" prop="bangfuValue">
                            <el-input v-model="ruleForm.bangfuValue"
                                      placeholder="帮扶产品" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='shangpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="商品库存" prop="shangpinKucunNumber">
                        <el-input v-model="shangpinForm.shangpinKucunNumber"
                                  placeholder="商品库存" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="商品库存" prop="shangpinKucunNumber">
                            <el-input v-model="ruleForm.shangpinKucunNumber"
                                      placeholder="商品库存" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='shangpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="购买获得积分" prop="shangpinPrice">
                        <el-input v-model="shangpinForm.shangpinPrice"
                                  placeholder="购买获得积分" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="购买获得积分" prop="shangpinPrice">
                            <el-input v-model="ruleForm.shangpinPrice"
                                      placeholder="购买获得积分" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='shangpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="商品原价" prop="shangpinOldMoney">
                        <el-input v-model="shangpinForm.shangpinOldMoney"
                                  placeholder="商品原价" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="商品原价" prop="shangpinOldMoney">
                            <el-input v-model="ruleForm.shangpinOldMoney"
                                      placeholder="商品原价" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='shangpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="所属仓库" prop="shangpinCangku">
                        <el-input v-model="shangpinForm.shangpinCangku"
                                  placeholder="所属仓库" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="所属仓库" prop="shangpinCangku">
                            <el-input v-model="ruleForm.shangpinCangku"
                                      placeholder="所属仓库" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='shangpin' ">
                    <el-form-item class="input" v-if="type!='info'"  label="商品热度" prop="shangpinClicknum">
                        <el-input v-model="shangpinForm.shangpinClicknum"
                                  placeholder="商品热度" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="商品热度" prop="shangpinClicknum">
                            <el-input v-model="ruleForm.shangpinClicknum"
                                      placeholder="商品热度" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="shangpinId" name="shangpinId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="帮扶申请编号" prop="shangpinBangfushenqingUuidNumber">
                       <el-input v-model="ruleForm.shangpinBangfushenqingUuidNumber"
                                 placeholder="帮扶申请编号" clearable  :readonly="ro.shangpinBangfushenqingUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="帮扶申请编号" prop="shangpinBangfushenqingUuidNumber">
                           <el-input v-model="ruleForm.shangpinBangfushenqingUuidNumber"
                                     placeholder="帮扶申请编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="申请标题" prop="shangpinBangfushenqingName">
                       <el-input v-model="ruleForm.shangpinBangfushenqingName"
                                 placeholder="申请标题" clearable  :readonly="ro.shangpinBangfushenqingName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="申请标题" prop="shangpinBangfushenqingName">
                           <el-input v-model="ruleForm.shangpinBangfushenqingName"
                                     placeholder="申请标题" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="帮扶申请类型" prop="shangpinBangfushenqingTypes">
                        <el-select v-model="ruleForm.shangpinBangfushenqingTypes" :disabled="ro.shangpinBangfushenqingTypes" placeholder="请选择帮扶申请类型">
                            <el-option
                                v-for="(item,index) in shangpinBangfushenqingTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="帮扶申请类型" prop="shangpinBangfushenqingValue">
                        <el-input v-model="ruleForm.shangpinBangfushenqingValue"
                            placeholder="帮扶申请类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.shangpinBangfushenqingFile" label="附件" prop="shangpinBangfushenqingFile">
                        <file-upload
                                tip="点击上传附件"
                                action="file/upload"
                                :limit="3"
                                :multiple="true"
                                :fileUrls="ruleForm.shangpinBangfushenqingFile?$base.url+ruleForm.shangpinBangfushenqingFile:''"
                                @change="shangpinBangfushenqingFileUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.shangpinBangfushenqingFile" label="附件" prop="shangpinBangfushenqingFile">
                            <a type="text" style="text-decoration:none" class="el-button" :href="$base.url+ruleForm.shangpinBangfushenqingFile"  >附件下载</a>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.shangpinBangfushenqingContent"  label="申请缘由" prop="shangpinBangfushenqingContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.shangpinBangfushenqingContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.shangpinBangfushenqingContent" label="申请缘由" prop="shangpinBangfushenqingContent">
                            <span v-html="ruleForm.shangpinBangfushenqingContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            <el-col :span="12" v-if="type=='info'">
                <div>
                    <el-form-item v-if="ruleForm.shangpinBangfushenqingYesnoTypes" label="申请状态" prop="shangpinBangfushenqingYesnoTypes">
                        <el-input v-model="ruleForm.shangpinBangfushenqingYesnoValue" placeholder="申请状态" readonly></el-input>
                    </el-form-item>
                </div>
            </el-col>
            <el-col :span="12" v-if="type=='info'">
                <div>
                    <el-form-item v-if="ruleForm.shangpinBangfushenqingYesnoText" label="审核意见" prop="shangpinBangfushenqingYesnoText">
                        <span v-html="ruleForm.shangpinBangfushenqingYesnoText"></span>
                    </el-form-item>
                </div>
            </el-col>
            <el-col :span="12" v-if="type=='info'">
                <div>
                    <el-form-item v-if="ruleForm.shangpinBangfushenqingShenheTime" label="审核时间" prop="shangpinBangfushenqingShenheTime">
                        <span v-html="ruleForm.shangpinBangfushenqingShenheTime"></span>
                    </el-form-item>
                </div>
            </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                shangpinForm: {},
                ro:{
                    shangpinId: false,
                    shangpinBangfushenqingUuidNumber: true,
                    shangpinBangfushenqingName: false,
                    shangpinBangfushenqingTypes: false,
                    shangpinBangfushenqingFile: false,
                    shangpinBangfushenqingContent: false,
                    insertTime: false,
                    shangpinBangfushenqingYesnoTypes: false,
                    shangpinBangfushenqingYesnoText: false,
                    shangpinBangfushenqingShenheTime: false,
                },
                ruleForm: {
                    shangpinId: '',
                    shangpinBangfushenqingUuidNumber: new Date().getTime(),
                    shangpinBangfushenqingName: '',
                    shangpinBangfushenqingTypes: '',
                    shangpinBangfushenqingFile: '',
                    shangpinBangfushenqingContent: '',
                    insertTime: '',
                    shangpinBangfushenqingYesnoTypes: '',
                    shangpinBangfushenqingYesnoText: '',
                    shangpinBangfushenqingShenheTime: '',
                },
                shangpinBangfushenqingTypesOptions : [],
                shangpinBangfushenqingYesnoTypesOptions : [],
                shangpinOptions : [],
                rules: {
                   shangpinId: [
                              { required: true, message: '商品不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   shangpinBangfushenqingUuidNumber: [
                              { required: true, message: '帮扶申请编号不能为空', trigger: 'blur' },
                          ],
                   shangpinBangfushenqingName: [
                              { required: true, message: '申请标题不能为空', trigger: 'blur' },
                          ],
                   shangpinBangfushenqingTypes: [
                              { required: true, message: '帮扶申请类型不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   shangpinBangfushenqingFile: [
                              { required: true, message: '附件不能为空', trigger: 'blur' },
                          ],
                   shangpinBangfushenqingContent: [
                              { required: true, message: '申请缘由不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '申请时间不能为空', trigger: 'blur' },
                          ],
                   shangpinBangfushenqingYesnoTypes: [
                              { required: true, message: '申请状态不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   shangpinBangfushenqingYesnoText: [
                              { required: true, message: '审核意见不能为空', trigger: 'blur' },
                          ],
                   shangpinBangfushenqingShenheTime: [
                              { required: true, message: '审核时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }else{
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=shangpin_bangfushenqing_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.shangpinBangfushenqingTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=shangpin_bangfushenqing_yesno_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.shangpinBangfushenqingYesnoTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `shangpin/page?page=1&limit=100&bangfuTypes=2`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.shangpinOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            shangpinChange(id){
                this.$http({
                    url: `shangpin/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.shangpinForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `shangpinBangfushenqing/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.shangpinChange(data.data.shangpinId)
                        _this.ruleForm.shangpinBangfushenqingContent = _this.ruleForm.shangpinBangfushenqingContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.ruleForm.shangpinBangfushenqingContent = this.ruleForm.shangpinBangfushenqingContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`shangpinBangfushenqing/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.shangpinBangfushenqingCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.shangpinBangfushenqingCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            shangpinBangfushenqingFileUploadChange(fileUrls){
                this.ruleForm.shangpinBangfushenqingFile = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
	background-color: transparent;
}
.btn .el-button {
  padding: 0;
}</style>

