import '../Footer/index.scss';
import Grid from '@material-ui/core/Grid';
import chplay from '../../assets/images/img-googleplay.jpg';
import appstore from '../../assets/images/img-appstore.jpg';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import DirectionsIcon from '@material-ui/icons/Directions';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
function Footer() {
    return (
        <div className="footer">
            <div className="footer__nav">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <h4>THÔNG TIN LIÊN HỆ</h4>
                        <ul className="footer__info-list">
                            <li className="footer_info-item">
                                <DirectionsIcon></DirectionsIcon>
                                <span className="footer_info-tittle-add">448/2/31, Lê Văn Việt, Tăng Nhơn Phú A, Thành phố Thủ Đức </span>
                            </li>
                            <li className="footer_info-item">
                                <PhoneIcon></PhoneIcon>
                                <span className="footer_info-tittle">0387 112 713</span>
                            </li>
                            <li className="footer_info-item">
                                <MailIcon></MailIcon>
                                <span className="footer_info-tittle">huytrinh2713@gmail.com</span>
                            </li>
                            <li className="footer_info-item marginTop">
                                <FacebookIcon></FacebookIcon>
                                <InstagramIcon></InstagramIcon>
                                <LinkedInIcon></LinkedInIcon>
                                <TwitterIcon></TwitterIcon>

                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={3}>
                        <h4>LIÊN KẾT</h4>
                        <ul className="footer__info-list">
                            <li className="footer_info-item">
                                <span className="footer_info-tittle">Giới thiệu </span>
                            </li>
                            <li className="footer_info-item">
                                <span className="footer_info-tittle">Đồng hồ nam</span>
                            </li>
                            <li className="footer_info-item">
                                <span className="footer_info-tittle">Đồng hồ nữ</span>
                            </li>
                            <li className="footer_info-item">
                                <span className="footer_info-tittle">Liên hệ</span>
                            </li>
                            <li className="footer_info-item">
                                <span className="footer_info-tittle">Blogs</span>
                            </li>

                        </ul>
                    </Grid>
                    <Grid item xs={3}>
                        <h4>HỖ TRỢ</h4>
                        <ul className="footer__info-list">
                            <li className="footer_info-item">
                                <span className="footer_info-tittle">Hướng dẫn mua hàng </span>
                            </li>
                            <li className="footer_info-item">
                                <span className="footer_info-tittle">Hướng dẫn thanh toán</span>
                            </li>
                            <li className="footer_info-item">
                                <span className="footer_info-tittle">Chính sách bảo hành</span>
                            </li>
                            <li className="footer_info-item">
                                <span className="footer_info-tittle">Chính sách đổi trả</span>
                            </li>
                            <li className="footer_info-item">
                                <span className="footer_info-tittle">Tư vấn khách hàng</span>
                            </li>
                        </ul>
                    </Grid>

                    <Grid item xs={3}>
                        <h4>TẢI ỨNG DỤNG TRÊN</h4>
                        <ul className="footer__info-list">
                            <li className="footer_info-item">
                                <span className="footer_info-tittle-link">Ứng dụng Watches hiện có sẵn trên Google Play & App Store. Tải nó ngay. </span>
                            </li>
                            <li className="footer_info-link">
                                <img src={appstore} alt="app store"></img>
                            </li>
                            <li className="footer_info-link">
                                <img src={chplay} alt="ch play"></img>
                            </li>

                        </ul>
                    </Grid>
                    <Grid item xs={12}>
                        <span className="footer_info-tittle-end">Copyright by Watches Shop® Since 2021</span>
                    </Grid>
                </Grid>

            </div>
        </div>
    );
}
export default Footer;