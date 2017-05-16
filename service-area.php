<?php 
$magnific_css = '<link rel="stylesheet" href="plugins/magnific-popup/magnific-popup.css">';
$gmap_css = '<link rel="stylesheet" href="css/gmap.css">';
$gmap_api = '<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6TlZ5ZT7RfDgiifjKJpnS9QkdVKqWbjI"></script>';
$gmap_js = '<script src="js/gmap.js"></script>';
$magnific_js = '<script src="plugins/magnific-popup/jquery.magnific-popup.min.js"></script>';
?>

<?php include('header.php');?>

<main class="main">

	<div class="page-header">
		<div class="page-header_bg"></div>
		<div class="container">
			<ul class="breadcrumb">
				<li><a href="#">HOME</a></li>
				<li>SERVICE AREAS</li>
			</ul>
		</div>
		<img src="img/bg-img/subpageheader.svg" alt="" class="page-header-svg">
	</div>

	<div class="container service-area-container">
		<div class="row">
			<div class="col-xs-12 col-sm-4 service-area-image-container">
				<img src="img/expansion.jpg" alt="" class="center-block main-description-image">
			</div>
			<div class="col-xs-12 col-sm-6">
				<div class="content">
					<h1 class="our-service-areas-margin"><strong>Our Service Areas</strong></h1>
					<p>&nbsp;</p>
					<p><strong>For Internet, Data, and Voice Connectivity Services</strong></p>
					<p>We are&nbsp;available&nbsp;in Makati, Ortigas, Manila, Caloocan, Cebu, Baguio, and the industrial areas of Laguna and Cavite.</p>
					<p>We are also continuing to expand and enhance our infrastructure network with fiber, resilient nodes, reliable routers, and NGN (Next Generation Network).</p>
				</div>
			</div>
		</div>
	</div>

	<!-- map -->	
	<div id="page_wrapper">
		<div class="zn_pb_wrapper clearfix zn_sortable_content" data-droplevel="0">
			<section class="zn_section eluid30a90db7 section-sidemargins section--no" id="eluid30a90db7">
				<div class="zn_section_size full_width zn-section-height--auto zn-section-content_algn--top ">
					<div class="row zn_columns_container zn_content " data-droplevel="1">
						<div class="eluida6050b54 col-md-12 col-sm-12 zn_sortable_content zn_content " data-droplevel="2">
							<div class="zn_google_map kl-slideshow static-content__slideshow scontent__maps uh_zn_def_header_style eluidceee223b">
								<div class="bgback"></div>
								<div class="th-sparkles"></div>	
								<div id="zn_google_map_eluidceee223b" class="zn_gmap_canvas th-google_map"></div>	
								<div class="kl-contentmaps__panel">
									<a href="#" class="js-toggle-class kl-contentmaps__panel-tgg hidden-xs" data-target=".kl-contentmaps__panel" data-target-class="is-closed"></a>
									<a href="http://kallyaswp.hogashstudio.netdna-cdn.com/demo/wp-content/uploads/2015/08/home-office-569359_640.jpg" data-lightbox="image" class="kl-contentmaps__panel-img">
									<img src="http://kallyaswp.hogashstudio.netdna-cdn.com/demo/wp-content/uploads/2015/08/home-office-569359_640.jpg" width="640" height="462" alt="" title="home-office-569359_640" class="kl-contentmaps__panel-img cover-fit-img">
									</a>
									<div class="kl-contentmaps__panel-info">
										<h5 class="kl-contentmaps__panel-title">Eastern Communications</h5>
										<div class="kl-contentmaps__panel-info-text">
											<p>Watch this space for more news and updates on our expansion efforts. We are also continuing to expand and enhance our infrastructure network with fiber, resilient nodes, reliable routers, and NGN (Next Generation Network).</p>
										</div>
									</div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>

</main>

<?php include('footer.php');?>