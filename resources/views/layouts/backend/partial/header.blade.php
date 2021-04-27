<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">Visit Site</a>
        </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
        <!-- Messages Dropdown Menu -->
        <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <div class="row">
                    <div>
                        <img width="42" style="margin-top: -9px; margin-right: 10px;" src="dist/img/user2-160x160.jpg"
                            class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div>
                        <strong>{{ Auth::user()->name }}<code>(Admin)</code></strong>
                        <i class="fa fa-angle-down ml-2 opacity-8"></i>
                    </div>
                </div>
            </a>

            <div class="dropdown-menu dropdown-menu-sm">
                <a href="#" class="dropdown-item">
                    <i class="fas fa-user mr-2"></i>
                    Profile
                </a>

                <a href="#" class="dropdown-item">
                    <i class="fas fa-cog mr-2"></i>
                    Setting
                </a>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">
                    <i class="fas fa-sign-out-alt mr-2"></i>
                    Logout
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                    @csrf
                </form>
            </div>
        </li>
    </ul>
</nav>
<!-- /.navbar -->
